import { useState, useEffect } from "react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import styles from "./TaskCard.module.css";
import { api } from "../appwrite";
import formatDDMMM from "../helpers/formatDDMMM";

const TaskCard = ({ key, item, index, onClick }) => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (activeCard) {
      const onSubmit = async () => {
        try {
          const cardData = await api.fetchPostById(activeCard);

          setUser($id);
          router.push("/dashboard");
        } catch (err) {
          console.log(err.message);
        }
      };
    }
  }, [activeCard]);

  return (
    <Draggable key={key} draggableId={item.$id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.wrapper}
          onClick={onClick}
        >
          <h3 className={styles.title}>{item.title.slice(0, 25)}</h3>
          <p className={styles.description}>{item.description.slice(0, 70)}</p>

          <div className={styles.date}>
            <p>
              <span>{item.due_date ? formatDDMMM(item.due_date) : ""}</span>
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
