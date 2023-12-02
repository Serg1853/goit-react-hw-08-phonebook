import { LabelStyle, InputStyle } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(selectFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <LabelStyle>
      Find contacts by name:
      <InputStyle
        type="text"
        name="filter"
        value={filterPhoneBook}
        title="Enter the name"
        required
        onChange={onChangeFilter}
      />
    </LabelStyle>
  );
};
