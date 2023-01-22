import React from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function Add() {
  const navigate = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }
  return (
    <Input addNote={onAddNoteHandler} />
  )
}
export default Add