import { createContext, useContext } from 'react';
import * as React from 'react';

import { TransferProgresses } from '@proton/shared/lib/interfaces/drive/transfer';
import { UploadFileList } from '../interface';
import { FileUpload, UpdateFilter } from './interface';
import useUpload from './useUpload';

interface UploadProviderState {
    uploads: FileUpload[];
    hasUploads: boolean;
    uploadFiles: (shareId: string, parentId: string, list: UploadFileList) => Promise<void>;
    pauseUploads: (idOrFilter: UpdateFilter) => void;
    resumeUploads: (idOrFilter: UpdateFilter) => void;
    cancelUploads: (idOrFilter: UpdateFilter) => void;
    restartUploads: (idOrFilter: UpdateFilter) => void;
    removeUploads: (idOrFilter: UpdateFilter) => void;
    clearUploads: () => void;
    getUploadsProgresses: () => TransferProgresses;
}

const UploadContext = createContext<UploadProviderState | null>(null);

export const UploadProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        fileUploads,
        hasUploads,
        uploadFiles,
        getProgresses,
        pauseUploads,
        resumeUploads,
        cancelUploads,
        restartUploads,
        removeUploads,
        clearUploads,
    } = useUpload();

    return (
        <UploadContext.Provider
            value={{
                uploads: fileUploads,
                hasUploads,
                uploadFiles,
                pauseUploads,
                resumeUploads,
                cancelUploads,
                restartUploads,
                removeUploads,
                clearUploads,
                getUploadsProgresses: getProgresses,
            }}
        >
            {children}
        </UploadContext.Provider>
    );
};

export const useUploadProvider = (): UploadProviderState => {
    const state = useContext(UploadContext);
    if (!state) {
        throw new Error('Trying to use uninitialized UploadProvider');
    }
    return state;
};
