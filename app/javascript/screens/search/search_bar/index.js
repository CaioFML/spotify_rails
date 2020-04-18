import React, { Fragment, useEffect, useState } from 'react';

const SearchBar = () => {

  return (
    <Fragment>
      <Columns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
          <SearchBar fetchSearch={fetchSearch} />
        </Columns.Column>
      </Columns>
      <Categories fetchCategorySearch={fetchCategorySearch} />
    </Fragment>
  );
}

export default SearchBar