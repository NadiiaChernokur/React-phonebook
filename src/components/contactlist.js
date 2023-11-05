import {
  ContactlistButton,
  ContactlistList,
} from './styles/contactlist.styles';

export const ContactList = ({ items, onDelite }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <ContactlistList key={item.id}>
            <p>{item.name} :</p>
            <p> {item.number}</p>
            <ContactlistButton type="button" onClick={() => onDelite(item.id)}>
              Delite contact
            </ContactlistButton>
          </ContactlistList>
        );
      })}
    </ul>
  );
};
