import React from "react";
import Item from "./Item";
import PropTypes from 'prop-types'

function ItemList({ notes }) {
   if (!notes.length) {
      return (
         <section className="notes-list-empty">
            <p className="notes-list__empty">Tidak Ada Catatan</p>
         </section>
      )
   }
   return (
      <section className="notes-list">
         {notes.map((note) => <Item key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} />)}
      </section>
   );
}
ItemList.propTypes = {
   notes: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default ItemList;