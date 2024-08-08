function filenamesToArray(filenames, dir) {
    return filenames.map((filename) => {
        var photoName = filename.split('.')[0], ext = filename.split('.')[1];
        return {lowRes: `/photography/${dir}/${photoName}_low.${ext}`, highRes: `/photography/${dir}/${filename}`, alt: photoName+'image', height: '300px'}
    });
}

export default filenamesToArray;