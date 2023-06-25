import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { Header, Form, Button, Input } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const inputHandleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
			toast('Enter the name of the Movies 🎥 ', {
        style: {
          borderRadius: '25px',
          background: '#b6a2d9',
          color: '#fff',
        },
      });
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch />
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          value={inputValue}
          placeholder="Search Cinema and Series"
          onChange={inputHandleChange}
        />
        <Toaster position="top-center" reverseOrder={false} />
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
