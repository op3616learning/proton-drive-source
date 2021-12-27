import { c } from 'ttag';
import { Icon, ToolbarButton } from '@proton/components';
import useFileUploadInput from '../../../uploads/useUploadInput';

const UploadFileButton = () => {
    const { inputRef: fileInput, handleClick, handleChange } = useFileUploadInput();

    return (
        <>
            <input multiple type="file" ref={fileInput} className="hidden" onChange={handleChange} />
            <ToolbarButton
                data-testid="toolbar-upload-file"
                icon={<Icon name="file-arrow-up" />}
                title={c('Action').t`Upload file`}
                onClick={handleClick}
            />
        </>
    );
};

export default UploadFileButton;
