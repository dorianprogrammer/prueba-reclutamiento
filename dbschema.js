exports.items = [
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.JPG",
        "updatedAt": 1636407082848,
        "createdAt": 1636407082848,
        "price": 300,
        "description": {},
        "id": "a8a4fbf4-9fab-4b07-8de5-e54044fca78c",
        "name": "cafe"
    },
    {
        "image": "sandwich.jpg",
        "updatedAt": 1606352129591,
        "createdAt": 1602144539123,
        "description": {},
        "id": "bd8a09b7-114c-4e0d-a0df-113ef5652a07",
        "price": 1000,
        "name": "CLUB SANDWICH"
    }
];


exports.orders = [
    {
        "updatedAt": 1609270954119,
        "createdAt": 1603942878902,
        "user": "Marco Mesen",
        "id": "8764fd0f-b280-4e81-a2f1-db5f52fec56a",
        "items": [
          {
            "id": "bd8a09b7-114c-4e0d-a0df-113ef5652a07",
            "qty": 2
          }
        ],
        "state": "working"
      },
      {
        "updatedAt": 1636420897134,
        "createdAt": 1636420897134,
        "user": "Danny Chaves",
        "id": "698b9fda-111c-4ffa-bebc-1d5b66254ecd",
        "items": [
          {
            "id": "63dc592c-c1b7-4c7c-b85f-7bb64a0e63c5",
            "qty": 3
          }
        ],
        "state": "pending"
      },
];