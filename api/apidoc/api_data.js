define({ "api": [
  {
    "type": "delete",
    "url": "/burger/:id",
    "title": "Remove a Burger",
    "group": "burger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Burger id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Burger deleted",
          "content": "HTTP/1.1 200 Burger deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Burger not found",
          "content": "HTTP/1.1 403 Burger not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/burger.js",
    "groupTitle": "burger",
    "name": "DeleteBurgerId"
  },
  {
    "type": "get",
    "url": "/Burger",
    "title": "get Burger",
    "group": "burger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Burger name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Burger",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Burger.id",
            "description": "<p>Burger id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Burger.name",
            "description": "<p>Burger name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Burger.price",
            "description": "<p>Burger price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Burger.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Burger.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 12,\n  \"name\": \"Big Mac\",\n  \"price\": 4.50\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/burger.js",
    "groupTitle": "burger",
    "name": "GetBurger"
  },
  {
    "type": "post",
    "url": "/Burger",
    "title": "add Burger",
    "group": "burger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Burger name</p>"
          },
          {
            "group": "Parameter",
            "type": "price",
            "optional": false,
            "field": "price",
            "description": "<p>Burger price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Big Mac\",\n  \"price\": 4.50\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Burger",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Burger.id",
            "description": "<p>Burger id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Burger.name",
            "description": "<p>Burger name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Burger.price",
            "description": "<p>Burger price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Burger.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Burger.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Big Mac\",\n  \"price\": 4.50\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Name or price undefined",
          "content": "HTTP/1.1 400 Name or price undefined",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/burger.js",
    "groupTitle": "burger",
    "name": "PostBurger"
  },
  {
    "type": "delete",
    "url": "/category/:id",
    "title": "Remove a Category",
    "group": "category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Category deleted",
          "content": "HTTP/1.1 200 Category deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Category not found",
          "content": "HTTP/1.1 403 Category not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/category.js",
    "groupTitle": "category",
    "name": "DeleteCategoryId"
  },
  {
    "type": "get",
    "url": "/Category",
    "title": "get Category",
    "group": "category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Category",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Category.id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Category.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Category.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Category.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Nouveauté\",\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/category.js",
    "groupTitle": "category",
    "name": "GetCategory"
  },
  {
    "type": "delete",
    "url": "/drink/:id",
    "title": "Remove a Drink",
    "group": "drink",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Drink id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Drink deleted",
          "content": "HTTP/1.1 200 Drink deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Drink not found",
          "content": "HTTP/1.1 403 Drink not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/drink.js",
    "groupTitle": "drink",
    "name": "DeleteDrinkId"
  },
  {
    "type": "get",
    "url": "/Drink",
    "title": "get Drinks",
    "group": "drink",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Drink name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Drink",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Drink.id",
            "description": "<p>Drink id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Drink.name",
            "description": "<p>Drink name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Drink.price",
            "description": "<p>Drink price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Drink.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Drink.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Coca cola\",\n  \"price\": 1.80\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/drink.js",
    "groupTitle": "drink",
    "name": "GetDrink"
  },
  {
    "type": "post",
    "url": "/Drink",
    "title": "add Drink",
    "group": "drink",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Drink name</p>"
          },
          {
            "group": "Parameter",
            "type": "price",
            "optional": false,
            "field": "price",
            "description": "<p>Drink price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Coca Cola\",\n  \"price\": 1.80\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Drink",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Drink.id",
            "description": "<p>Drink id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Drink.name",
            "description": "<p>Drink name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Drink.price",
            "description": "<p>Drink price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Drink.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Drink.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Coca cola\",\n  \"price\": 1.80\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Name or price or size_id undefined",
          "content": "HTTP/1.1 400 Name or price or size_id undefined",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/drink.js",
    "groupTitle": "drink",
    "name": "PostDrink"
  },
  {
    "type": "delete",
    "url": "/fries/:id",
    "title": "Remove Fries",
    "group": "fries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Fries id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Fries deleted",
          "content": "HTTP/1.1 200 Fries deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Fries not found",
          "content": "HTTP/1.1 403 Fries not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/fries.js",
    "groupTitle": "fries",
    "name": "DeleteFriesId"
  },
  {
    "type": "get",
    "url": "/Fries",
    "title": "get Fries",
    "group": "fries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Fries name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Fries",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Fries.id",
            "description": "<p>Fries id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Fries.name",
            "description": "<p>Fries name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Fries.price",
            "description": "<p>Fries price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fries.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fries.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Potatoes\",\n  \"price\": 2.70\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/fries.js",
    "groupTitle": "fries",
    "name": "GetFries"
  },
  {
    "type": "post",
    "url": "/Fries",
    "title": "add Fries",
    "group": "fries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Fries name</p>"
          },
          {
            "group": "Parameter",
            "type": "price",
            "optional": false,
            "field": "price",
            "description": "<p>Fries price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Potatoes\",\n  \"price\": 2.70\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Fries",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Fries.id",
            "description": "<p>Fries id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Fries.name",
            "description": "<p>Fries name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Fries.price",
            "description": "<p>Fries price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fries.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fries.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Potatoes\",\n  \"price\": 1.80\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/fries.js",
    "groupTitle": "fries",
    "name": "PostFries"
  },
  {
    "type": "delete",
    "url": "/meal/:id",
    "title": "Remove a Meal",
    "group": "meal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Meal id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Meal deleted",
          "content": "HTTP/1.1 200 Meal deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Meal not found",
          "content": "HTTP/1.1 403 Meal not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/meal.js",
    "groupTitle": "meal",
    "name": "DeleteMealId"
  },
  {
    "type": "get",
    "url": "/Meal",
    "title": "get Meal",
    "group": "meal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Meal name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Meal",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Meal.id",
            "description": "<p>Meal id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Meal.name",
            "description": "<p>Meal name</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.discount",
            "description": "<p>Meal discount</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.drink_id",
            "description": "<p>Meal drink_id</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.fries_id",
            "description": "<p>Meal fries_id</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.burger_id",
            "description": "<p>Meal burger_id</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.price",
            "description": "<p>Meal price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Meal.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Meal.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Maxi Best Of\",\n  \"discount\": 0.7,\n  \"drink_id\": 3,\n  \"fries_id\": 2,\n  \"burger_id\": 1,\n  \"price\": 8.80,\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/meal.js",
    "groupTitle": "meal",
    "name": "GetMeal"
  },
  {
    "type": "post",
    "url": "/Meal",
    "title": "add Meal",
    "group": "meal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Meal name</p>"
          },
          {
            "group": "Parameter",
            "type": "discount",
            "optional": false,
            "field": "discount",
            "description": "<p>Meal discount</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \t\"name\": \"Menu CBO\",\n \t\"discount\": 0.75,\n \t\"drink_id\": 2,\n \t\"fries_id\": 2,\n \t\"burger_id\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Meal",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Meal.id",
            "description": "<p>Meal id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Meal.name",
            "description": "<p>Meal name</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.discount",
            "description": "<p>Meal discount</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.drink_id",
            "description": "<p>Meal drink_id</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.fries_id",
            "description": "<p>Meal fries_id</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.burger_id",
            "description": "<p>Meal burger_id</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "Meal.price",
            "description": "<p>Meal price</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Meal.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Meal.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Maxi Best Of\",\n  \"discount\": 0.7,\n  \"drink_id\": 3,\n  \"fries_id\": 2,\n  \"burger_id\": 1,\n  \"price\": 8.80,\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Data missing",
          "content": "HTTP/1.1 400 Data missing",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/meal.js",
    "groupTitle": "meal",
    "name": "PostMeal"
  },
  {
    "type": "delete",
    "url": "/size/:id",
    "title": "Remove a Size",
    "group": "size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Size id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Size deleted",
          "content": "HTTP/1.1 200 Size deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Size not found",
          "content": "HTTP/1.1 403 Size not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/size.js",
    "groupTitle": "size",
    "name": "DeleteSizeId"
  },
  {
    "type": "get",
    "url": "/Size",
    "title": "get Size",
    "group": "size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Size name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Size",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Size.id",
            "description": "<p>Size id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Size.name",
            "description": "<p>Size name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Size.price_add",
            "description": "<p>Size price_add</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Size.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Size.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Fat\",\n  \"price_add\": 0.90\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/size.js",
    "groupTitle": "size",
    "name": "GetSize"
  },
  {
    "type": "post",
    "url": "/Size",
    "title": "add Size",
    "group": "size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Size name</p>"
          },
          {
            "group": "Parameter",
            "type": "price_add",
            "optional": false,
            "field": "price_add",
            "description": "<p>Size price_add</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Fat\",\n  \"price_add\": 0.90\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Size",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Size.id",
            "description": "<p>Size id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Size.name",
            "description": "<p>Size name</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Size.price_add",
            "description": "<p>Size price_add</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Size.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Size.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Fat\",\n  \"price_add\": 0.90\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/size.js",
    "groupTitle": "size",
    "name": "PostSize"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Remove a User",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 User deleted",
          "content": "HTTP/1.1 200 User deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 User not found",
          "content": "HTTP/1.1 403 User not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "DeleteUserId"
  },
  {
    "type": "post",
    "url": "/User",
    "title": "add User",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>User login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<p>User isAmdmin?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"login\": \"Admin\",\n  \"password\":\"Admin\",\n  \"admin\":true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.login",
            "description": "<p>User login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "User.admin",
            "description": "<p>User isAmdmin?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": 1,\n  \"name\": \"Admin\",\n  \"password\":\"Admin\",\n  \"admin\":true\n  \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n  \"created_at\": \"2018-05-14T00:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Data missing",
          "content": "HTTP/1.1 400 Data missing",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "PostUser"
  },
  {
    "type": "post",
    "url": "/user/authenticate",
    "title": "authenticate User",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>User login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<p>User isAmdmin?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"login\": \"Admin\",\n  \"password\":\"Admin\",\n  \"admin\":true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"success\" : true\n  \"message\" : 'Token generated'\n  \"token\" : 'viygerhiujodzkenrutbvunohiezpjaopoeepcoza'\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Authentication failed. User not found",
          "content": "HTTP/1.1 400 Authentication failed. User not found",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Authenfication failed. Wrong password",
          "content": "HTTP/1.1 400 Authenfication failed. Wrong password",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "PostUserAuthenticate"
  }
] });
