import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import AddNote from '../components/AddNote';
import ItemList from '../components/ItemList';
import Search from '../components/Search';
import { getActiveNotes, searchNotes } from '../utils/local-data';
import PropTypes from 'prop-types';

function HomeWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }
  return <Home onSearch={changeSearchParams} defaultKeyword={title} />
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
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
      <section className='homepage'>
        <h2>Catatan Aktif</h2>
        <Search onSearch={this.onSearch} />
        <ItemList notes={notes} />
        <AddNote />
      </section>
    )
  }
}
Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
}
export default HomeWrapper;