import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Label } from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filetrData = useSelector(selectFilter);

  return (
    <Label>
      Find contact by name
      <input
        type="text"
        value={filetrData}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value.trim()))}
      />
    </Label>
  );
};
