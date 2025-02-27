const notes =[];
function saveNote(content,id){
    notes.push({content:content , id:id});
    
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
    if (typeof id !== "number") {
      return "Error: ID must be a number!";
    }
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id==id) {
            return notes[i];
        }   
        return "Note not found!!!";
        
    }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); 


  //logOutNotes

  function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
       console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
        
    }

  }
  
  logOutNotesFormatted();
