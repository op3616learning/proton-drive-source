import { c } from 'ttag';

import { ToolbarButton, Icon } from '@proton/components';

import useFileUploadInput from '../../../uploads/useUploadInput';

const UploadFolderButton = () => {
    const { inputRef: fileInput, handleClick: handleUploadFolder, handleChange } = useFileUploadInput(true);

    return (
        <>
            <input multiple type="file" ref={fileInput} className="hidden" onChange={handleChange} />
            <ToolbarButton
                data-testid="toolbar-upload-folder"
                icon={<Icon name="folder-arrow-up" />}
                title={c('Action').t`Upload folder`}
                onClick={handleUploadFolder}
            />
        </>
    );
};

export default UploadFolderButton;
