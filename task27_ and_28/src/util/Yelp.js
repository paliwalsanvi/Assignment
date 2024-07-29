const apiKey = 'NehneYAHtO2eDmWujdUmb8HtKMgFsXhNr17m8It4HqGYcAzWq2zzgYXmM2NJK2K5Kn-08UGiOQXvvA3LyC8jQlgMIh9MZT5DR7MvcdXmW48YPBQ1OQ-oHAxCwMOnZnYx'

const Yelp = {};


Yelp.search = (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
    }
    ).then(response => response.json())
        .then(jsonResponse => {
            if ("businesses" in jsonResponse) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count

                }))
            }
        })
    }
    export default Yelp;