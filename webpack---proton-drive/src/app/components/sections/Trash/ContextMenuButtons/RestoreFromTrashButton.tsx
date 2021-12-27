import { c } from 'ttag';
import { FileBrowserItem } from '@proton/shared/lib/interfaces/drive/fileBrowser';

import useToolbarActions from '../../../../hooks/drive/useActions';
import { ContextMenuButton } from '../../ContextMenu';

interface Props {
    shareId: string;
    items: FileBrowserItem[];
    close: () => void;
}

const RestoreFromTrashButton = ({ shareId, items, close }: Props) => {
    const { restoreFromTrash } = useToolbarActions();

    return (
        <ContextMenuButton
            name={c('Action').t`Restore from trash`}
            icon="arrow-rotate-right"
            testId="context-menu-restore"
            action={() => restoreFromTrash(shareId, items)}
            close={close}
        />
    );
};

export default RestoreFromTrashButton;
