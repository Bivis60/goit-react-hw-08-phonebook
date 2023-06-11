import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Span, Li, Button } from './ContactList.styled';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const contactFilter = useSelector(selectFilter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleList = () => {
    const normalizedFilter = contactFilter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ul>
        {getVisibleList().map(({ id, name, number }) => {
          return (
            <Li key={id}>
              <Span>{name}: </Span>
              <Span>{number}</Span>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Li>
          );
        })}
      </ul>
    </>
  );
};
