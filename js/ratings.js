const collect_ratings = () => {
    const ratings = { 'count' : 0, 'sum': 0, 'average': 0};
    let rating = 0;
    const elements = document.querySelectorAll('rating');
    elements.forEach(element => {
        element.id.replace('star', '');
        ratings.sum += parseInt(element.value);
        parseInt(element.value)*ratings.sum;
    });
    if (ratings.sum != 0) {
        ratings.average = ratings.sum/ratings.count;

    }
    return ratings;
}

document.addEventListener('change', () => {
    const ratings = collect_ratings();
    document.querySelector('#average').value = ratings.average.toFixed(2);

})