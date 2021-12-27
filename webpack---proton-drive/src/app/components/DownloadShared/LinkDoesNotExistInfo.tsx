import { c } from 'ttag';

import { Icon } from '@proton/components';

const LinkDoesNotExistInfo = () => {
    return (
        <>
            <h3 className="text-bold mt2 mb0-25">{c('Title').t`The link either does not exist or has expired`}</h3>
            <div
                style={{ '--height-custom': '9em' }}
                className="flex h-custom flex-column flex-align-items-center flex-justify-center w100 mt2 mb1"
            >
                <Icon name="circle-exclamation" size={110} className="fill-primary" />
            </div>
        </>
    );
};

export default LinkDoesNotExistInfo;
