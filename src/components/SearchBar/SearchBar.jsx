export const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit(evt.target.elements.query.value);
        }}
      >
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

/* <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>; */
