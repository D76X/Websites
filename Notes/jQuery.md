# JQuery

---

### Difference between window height and document height and load data on page scroll - infinite scroll

* [Difference between window height and document height](https://www.youtube.com/watch?v=Slx7hen576Q)
* [Load data on page scroll using jquery - Infinite scroll](https://www.youtube.com/watch?v=HPVavdDzYoI)

The formula to detected when the scrolbar has reached the bottom of the window is

```
$(window).scrollTop() = $(document).height() - $(window).height()
```

The following is an example that employ a form of the former condition to load more contents into the document.

```
<script type="text/javascript">

    $(document).ready(function () {

        /*
        $("#btn-load-teils").click(function () {
            let containerTeils = $("#container-teils");
            let itemsCount = containerTeils.children().length;
            containerTeils.append('<div>' + (++itemsCount) + '</div>');
        })
        */

        $(window).scroll(function () {

            let wnd = $(window);
            let doc = $(document);

            if (wnd.scrollTop() >= doc.height() - wnd.height() - 10) {

                let containerTeils = $("#container-teils");
                let itemsCount = containerTeils.children().length;
                containerTeils.append('<div>' + (++itemsCount) + '</div>');
            }
        })
    });

</script>
```

---
