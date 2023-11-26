import { useSelector } from "react-redux";

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth);

  const noteBackgroundColor = note.isStaff ? "rgba(0,0,0,0.7)" : "#ffffff";
  const noteTextColor = note.isStaff ? "#ffffff" : "#000000";

  return (
    <div
      className={`bg-white p-4 rounded-md shadow-md mb-4`}
      style={{
        backgroundColor: noteBackgroundColor,
        color: noteTextColor,
      }}
    >
      <h4 className="text-lg font-semibold mb-2">
        Note from{" "}
        {note.isStaff ? (
          <span className="font-bold">Staff</span>
        ) : (
          <span className="font-bold">{user.name}</span>
        )}
      </h4>
      <p className="text-gray-700">{note.text}</p>
      <div className="text-sm text-gray-500 mt-2">
        {new Date(note.createdAt).toLocaleString("en-US")}
      </div>
    </div>
  );
}

export default NoteItem;
