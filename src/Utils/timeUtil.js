export const formatTime = (time) => {
    const createdTime = new Date(time);

    const yyyy = createdTime.getFullYear();
    let mm = createdTime.getMonth() + 1; // Months start at 0!
    let dd = createdTime.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
  };
  