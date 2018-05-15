define({ "api": [
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
            "description": "<p>Task price</p>"
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
            "description": "<p>Task price</p>"
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
          "title": "Task not found",
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
            "description": "<p>Task price</p>"
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
            "description": "<p>Task price</p>"
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
            "description": "<p>Task price</p>"
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
          "content": "{\n  \"name\": \"Coca Cola\",\n  \"price\": 2.70\n}",
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
            "description": "<p>Task price</p>"
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
            "description": "<p>Task price_add</p>"
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
            "description": "<p>Task price_add</p>"
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
  }
] });
