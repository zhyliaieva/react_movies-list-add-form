import React, { useState } from 'react';
import { TextField } from '../TextField';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import classNames from 'classnames';

export const NewMovie = () => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [titleError, setTitleError] = React.useState('');
  const [imgUrlError, setImgUrlError] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState('');
  const [imdbUrlError, setImdbUrlError] = React.useState('');
  const [imdbIdError, setImdbIdError] = React.useState('');

  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  const isValid =
    title.trim().length > 0 &&
    imgUrl.trim().length > 0 &&
    imdbUrl.trim().length > 0 &&
    imdbId.trim().length > 0;
  const urlPattern = new RegExp(
    '^((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&=+$,\\w]+@)?[A-Za-z0-9.-]+|' +
      '(?:www\\.|[-;:&=+$,\\w]+@)[A-Za-z0-9.-]+)' +
      '((?:\\/[+~%/\\.\\w-_]*)?\\??(?:[-+=&;%@,\\.\\w_]*)#?' +
      '(?:[,.!/\\\\\\w]*))?)$',
  );

  function validateTitle(value: string) {
    if (!value) {
      return 'Title is required';
    }

    return '';
  }

  function validateUrl(value: string) {
    if (!value) {
      return 'Url is required';
    }

    if (!urlPattern.test(value.trim())) {
      return 'Please enter a valid URL';
    }

    return '';
  }

  function validateImdbUrl(value: string) {
    if (!value) {
      return 'Imdb Url is required';
    }

    if (!urlPattern.test(value.trim())) {
      return 'Please enter a valid Imdb URL';
    }

    return '';
  }

  function validateImdbId(value: string) {
    if (!value) {
      return 'Imdb ID is required';
    }

    return '';
  }

  function validateDescription(value: string) {
    if (!value) {
      return 'Description is required';
    }

    return '';
  }

  const handleTitleChange = (newValue: string) => {
    setTitle(newValue);
    setTitleError('');
  };

  const handleDescriptionChange = (newValue: string) => {
    setDescription(newValue);
    setDescriptionError('');
  };

  const handleImgUrlChange = (newValue: string) => {
    setImgUrl(newValue);
    setImgUrlError('');
  };

  const handleImdbUrlChange = (newValue: string) => {
    setImdbUrl(newValue);
    setImgUrlError('');
  };

  const handleImdbIdChange = (newValue: string) => {
    setImdbId(newValue);
    setImgUrlError('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const titleErrorValue = validateTitle(title);
    const imgUrlErrorValue = validateUrl(imgUrl);
    const descriptionErrorValue = validateDescription(description);
    const imdbUrlErrorValue = validateImdbUrl(imdbUrl);
    const imdbIdErrorValue = validateImdbId(imdbId);

    setImdbUrlError(imdbUrlErrorValue);
    setImdbIdError(imdbIdErrorValue);

    setTitleError(titleErrorValue);
    setImgUrlError(imgUrlErrorValue);
    setDescriptionError(descriptionErrorValue);
    if (
      titleErrorValue ||
      imgUrlErrorValue ||
      descriptionErrorValue ||
      imdbUrlErrorValue ||
      imdbIdErrorValue
    ) {
      return;
    }
    alert('Movie added!');
    // Clear the form

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
    setTitleError('');
    setImgUrlError('');
    setDescriptionError('');
    setImdbUrlError('');
    setImdbIdError('');

    setCount(count + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit} noValidate>
      <h2 className="title">Add a movie</h2>

      <TextField
        className={classNames('input', { 'is-danger': titleError })}
        placeholder="Enter Title"
        name="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
        onBlur={() => setTitleError(validateTitle(title))}
        required
      />

      <TextField
        className={classNames('input', { 'is-danger': descriptionError })}
        name="description"
        label="Description"
        placeholder="Enter Description"
        value={description}
        onChange={handleDescriptionChange}

      />

      <TextField
        className={classNames('input', { 'is-danger': imgUrlError })}
        label="Image URL"
        name="imgUrl"
        value={imgUrl}
        onChange={handleImgUrlChange}
        required
        onBlur={() => setImgUrlError(validateUrl(imgUrl))}
      />

      <TextField
        className={classNames('input', { 'is-danger': imdbUrlError })}
        placeholder="Enter Imdb URL"
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={handleImdbUrlChange}
        required
        onBlur={() => setImdbUrlError(validateImdbUrl(imdbUrl))}
      />

      <TextField
        className={classNames('input', { 'is-danger': imdbIdError })}
        placeholder="Enter Imdb ID"
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={handleImdbIdChange}
        required
        onBlur={() => setImdbIdError(validateImdbId(imdbId))}
      />

      {titleError && <p className="help is-danger">{titleError}</p>}
      {imgUrlError && <p className="help is-danger">{imgUrlError}</p>}

      {descriptionError && <p className="help is-danger">{descriptionError}</p>}
      {imdbUrlError && <p className="help is-danger">{imdbUrlError}</p>}
      {imdbIdError && <p className="help is-danger">{imdbIdError}</p>}

      <div className="field is-grouped">
        <div className="control">
          <button
            disabled={!isValid}
            type="submit"
            data-cy="submit-button"
            className="button is-link"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
