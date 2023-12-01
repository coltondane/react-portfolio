// Helper functions

// validate email
export function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
// show modal handler
export function showModal(message) {
  setModalMessage(message);
  setShow(true);
}
// close modal handler
export function closeModal() {
  setShow(false);
}