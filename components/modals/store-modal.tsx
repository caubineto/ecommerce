"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Crie sua Loja"
            description="Adicione uma nova loja e gerencie produtos e vendas."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Criação da futura da loja
        </Modal>
    );
};

