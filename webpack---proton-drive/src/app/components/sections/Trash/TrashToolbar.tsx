import { Toolbar, ToolbarSeparator } from '@proton/components';

import { DetailsButton, DownloadButton, LayoutDropdown, PreviewButton } from '../ToolbarButtons';
import { DeletePermanentlyButton, RestoreFromTrashButton } from './ToolbarButtons';
import { useTrashContent } from './TrashContentProvider';

interface Props {
    shareId: string;
}

const TrashToolbar = ({ shareId }: Props) => {
    const { fileBrowserControls } = useTrashContent();
    const { selectedItems } = fileBrowserControls;

    return (
        <Toolbar>
            <PreviewButton shareId={shareId} selectedItems={selectedItems} />
            <DownloadButton shareId={shareId} selectedItems={selectedItems} disabledFolders />
            <ToolbarSeparator />
            <DetailsButton shareId={shareId} selectedItems={selectedItems} />
            <ToolbarSeparator />
            <RestoreFromTrashButton shareId={shareId} disabled={!selectedItems.length} />
            <ToolbarSeparator />
            <DeletePermanentlyButton shareId={shareId} disabled={!selectedItems.length} />

            <span className="mlauto flex">
                <LayoutDropdown />
            </span>
        </Toolbar>
    );
};

export default TrashToolbar;
