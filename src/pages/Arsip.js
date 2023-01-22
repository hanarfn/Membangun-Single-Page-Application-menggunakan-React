import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Search from '../components/Search';
import { getArchivedNotes, searchNotes } from '../utils/local-data';
import PropTypes from 'prop-types';

function ArsipWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }
  return <Arsip onSearch={changeSearchParams} defaultKeyword={title} />
}
class Arsip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(keyword) {
    this.setState({ keyword });
    this.props.onSearch(keyword);
  }
  render() {
    const notes = searchNotes(this.state.notes, this.state.keyword);
    return (
      <section className='archives-page'>
        <h2>Catatan Arsip</h2>
        <Search onSearch={this.onSearch} />
        <ItemList notes={notes} />
      </section>
    )
  }
}
Arsip.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
}
export default ArsipWrapper;