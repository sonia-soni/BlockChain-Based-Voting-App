(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function () {
      select('body').classList.toggle('toggle-sidebar');
    });
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function () {
      select('.search-bar').classList.toggle('search-bar-show');
    });
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    window.addEventListener('scroll', toggleBacktotop);
  }

  /**
   * Initialize tooltips
   */
  const initTooltips = () => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipEl => {
      new bootstrap.Tooltip(tooltipEl);
    });
  };

  /**
   * Initialize Quill editors
   */
  const initQuillEditors = () => {
    if (select('.quill-editor-default')) {
      new Quill('.quill-editor-default', { theme: 'snow' });
    }
    if (select('.quill-editor-bubble')) {
      new Quill('.quill-editor-bubble', { theme: 'bubble' });
    }
    if (select('.quill-editor-full')) {
      new Quill(".quill-editor-full", {
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"]
          ]
        },
        theme: "snow"
      });
    }
  };

  /**
   * Initialize DataTables
   */
  const initDataTables = () => {
//    select('.datatable', true).forEach(datatable => {
//      new simpleDatatables.DataTable(datatable);
//    });
  };

  /**
   * ResizeObserver for ECharts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    new ResizeObserver(() => {
      select('.echart', true).forEach(chart => {
        echarts.getInstanceByDom(chart)?.resize();
      });
    }).observe(mainContainer);
  }

  /**
   * MutationObserver to reinitialize components dynamically
   */
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        // Reinitialize dynamically added elements
        initTooltips();
        initQuillEditors();
        initDataTables();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  /**
   * Load initial components
   */
  window.addEventListener('load', () => {
    initTooltips();
    initQuillEditors();
    initDataTables();
  });

  /*review*/
  const reviewDiv = document.getElementById("reviewContent");
    reviewDiv.innerHTML = ""; // Clear previous content

    const formData = new FormData(document.getElementById("doctorForm"));
    formData.forEach((value, key) => {
  const prettyKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  if (typeof value === "string" && value.trim() !== "") {
    reviewDiv.innerHTML += `<p><strong>${prettyKey}:</strong> ${value}</p>`;
  } else if (value instanceof File && value.name) {
    reviewDiv.innerHTML += `<p><strong>${prettyKey}:</strong> ${value.name}</p>`;
  }
});

//    formData.forEach((value, key) => {
//      if (value.trim() !== "") {
//        const prettyKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
//        reviewDiv.innerHTML += `<p><strong>${prettyKey}:</strong> ${value}</p>`;
//      }
//    });
})();
