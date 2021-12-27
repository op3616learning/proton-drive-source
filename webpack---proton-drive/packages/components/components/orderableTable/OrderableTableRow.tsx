import { ReactNode } from 'react';
import Icon from '../icon/Icon';
import { TableRow } from '../table';
import { OrderableElement, OrderableHandle } from '../orderable';

interface Props {
    index: number;
    className?: string;
    cells?: ReactNode[];
}

const OrderableTableRow = ({ index, cells = [], className, ...rest }: Props) => (
    <OrderableElement index={index}>
        <TableRow
            cells={[
                <OrderableHandle key="icon">
                    <span className="flex" data-testid="table:order-icon">
                        <Icon className="mtauto mbauto cursor-row-resize" name="align-justify" />
                    </span>
                </OrderableHandle>,
                ...cells,
            ]}
            className={className}
            {...rest}
        />
    </OrderableElement>
);

export default OrderableTableRow;
