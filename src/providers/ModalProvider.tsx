"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ModalContextValue = {
  isAnyModalOpen: boolean;
  registerModal: (id: symbol) => () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const openModals = useRef(new Set<symbol>());
  const [openModalCount, setOpenModalCount] = useState(0);

  const registerModal = useCallback((id: symbol) => {
    openModals.current.add(id);
    setOpenModalCount(openModals.current.size);

    return () => {
      openModals.current.delete(id);
      setOpenModalCount(openModals.current.size);
    };
  }, []);

  const value = useMemo(
    () => ({ isAnyModalOpen: openModalCount > 0, registerModal }),
    [openModalCount, registerModal],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModalState() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalState must be used within ModalProvider");
  }
  return context;
}

export function useModalRegistration(isOpen: boolean) {
  const { registerModal } = useModalState();
  const id = useRef(Symbol("modal"));

  useLayoutEffect(() => {
    if (!isOpen) return;
    return registerModal(id.current);
  }, [isOpen, registerModal]);
}
