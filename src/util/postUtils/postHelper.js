export const newItemwithImgDocument = (form, id, imageName, catagory) => {
  const images = imageName.map(
    (file) =>
      `https://firebasestorage.googleapis.com/v0/b/easypezy-39664.appspot.com/o/items%2F${id}%2F${file.name.replace(
        / /g,
        ''
      )}?alt=media`
  );
  return {
    ...form,
    itemImgUrl: images,
    itemId: id,
    catagory: catagory,
  };
};
