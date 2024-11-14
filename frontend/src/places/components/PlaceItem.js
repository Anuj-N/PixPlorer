import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openMapHandler = () => {
    const mapUrl = `https://maps.google.com/maps?q=${props.coordinates.lat},${props.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    window.open(mapUrl, "_blank");
  };

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    setIsDeleting(true);

    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${props.id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );

      props.onDelete(props.id);
    } catch (err) {
      setIsDeleting(false);
    }
  };

  if (isDeleting) {
    return null;
  }

  let imageUrl;
  if (props.image) {
    // Convert the base64 string to a data URL
    imageUrl = `data:image/jpeg;base64,${props.image}`;
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button danger onClick={confirmDeleteHandler} disabled={isLoading}>
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
            <Button
              inverse
              onClick={(e) => {
                e.preventDefault();
                cancelDeleteHandler();
              }}
              disabled={isLoading}
              type="button" // Explicitly set type to prevent form submission
            >
              Cancel
            </Button>
          </>
          // <>
          //   <Button danger onClick={confirmDeleteHandler} disabled={isLoading}>
          //     {isLoading ? "Deleting..." : "Delete"}
          //   </Button>
          //   <Button inverse onClick={cancelDeleteHandler} disabled={isLoading}>
          //     Cancel
          //   </Button>
          // </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that this
          will permanently delete the place and cannot be retrieved later.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img src={imageUrl} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              View on Map
            </Button>
            {auth.userId === props.creatorId && (
              <Button to={`/places/${props.id}`}>Edit</Button>
            )}
            {auth.userId === props.creatorId && (
              <Button danger onClick={showDeleteWarningHandler}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
