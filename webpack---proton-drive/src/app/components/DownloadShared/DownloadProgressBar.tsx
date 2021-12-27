import { Progress } from '@proton/components';

import { Download, TransfersStats } from '@proton/shared/lib/interfaces/drive/transfer';
import { calculateProgress, getProgressBarStatus } from '../../utils/transfer';

interface Props {
    latestStats: TransfersStats;
    download: Download;
}

const DownloadProgressBar = ({ latestStats, download }: Props) => {
    const percentageDone = calculateProgress(latestStats, [download]);
    const status = getProgressBarStatus(download.state);
    return (
        <>
            <Progress className={`progress-bar--${status}`} value={percentageDone} />
            <div className="mt1">{percentageDone} %</div>
        </>
    );
};

export default DownloadProgressBar;
