import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {data} from './books'   //  named import
import SpecificBook from './Book'   //  default import
import {greeting} from './testing/testing'

// for js files,  we don't need to give extension

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById('root'));
