
#OBJDFS 

Side effect free client-side/server-side (Node.js) JS object key search.

##Usage

Searching through the global namespace in the browser:

```JavaScript
OBJDFS.WINDFS (<search string>);
```

Searching through an arbitrary JS object:

```JavaScript
OBJDFS (<search string>);
```

##Options

* By default, the search will be performed to a max depth of 10. This restriction can be eliminated as follows:


    ```JavaScript
    OBJDFS (<search string>, Infinity);
    ```

##Disclaimer

OBJDFS's runtime is O(|E|*|V|**2) since determining whether a vertex has been visited is O(|V|**2). This is to avoid having to add unique id properties to visited objects.

