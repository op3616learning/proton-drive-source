import { c } from 'ttag';

import { FileBrowserItem } from '@proton/shared/lib/interfaces/drive/fileBrowser';
import useToolbarActions from '../../../../hooks/drive/useActions';
import { ContextMenuButton } from '../../ContextMenu';
import { DriveFolder } from '../../../../hooks/drive/useActiveShare';

interface Props {
    sourceFolder: DriveFolder;
    items: FileBrowserItem[];
    close: () => void;
}

const MoveToTrashButton = ({ sourceFolder, items, close }: Props) => {
    const { openMoveToTrash } = useToolbarActions();

    return (
        <ContextMenuButton
            name={c('Action').t`Move to trash`}
            icon="trash"
            testId="context-menu-trash"
            action={() => openMoveToTrash(sourceFolder, items)}
            close={close}
        />
    );
};

export default MoveToTrashButton;
