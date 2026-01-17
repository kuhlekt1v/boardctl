import React from 'react';
import {Column as IColumn, Card as ICard} from '../core/models.js';
import Column from './Column.js';
import Box from './Box.js';
import {useFocus} from '../context/FocusContext.js';

type Props = {
	columns: IColumn[];
	cards: ICard[];
	columnOffsets: number[];
};

const Columns = ({columns, cards, columnOffsets}: Props) => {
	const {focusState} = useFocus();

	return (
		<Box>
			{columns.map((column, index) => (
				<Column
					key={column.id}
					title={column.name}
					cards={cards}
					columnIndex={index}
					isFocused={index === focusState.active.columnIndex}
					offset={columnOffsets[index]}
				/>
			))}
		</Box>
	);
};
export default Columns;
