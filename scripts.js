window.onload = function () {
    // Create dropdown and content display div
    const select = document.createElement("select");
    select.id = "topicSelect";
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";
  
    // Insert dropdown after the disclaimer section
    const disclaimer = document.querySelector(".disclaimer");
    disclaimer.after(select);
    select.after(contentDiv);
  
    // Fetch the text file from the 'text' folder
    fetch("reactans.txt")
      .then((response) => response.text()) // Parse response as text
      .then((text) => {
        // Function to escape HTML (for safely displaying content)
        function escapeHtml(unsafe) {
          return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }
  
        // Initial content display
        contentDiv.innerHTML = `<pre><code class="language-txt">${escapeHtml(
          text
        )}</code></pre>`;
        Prism.highlightAll();
  
        // Define the topics in the desired order with corresponding sections in reactans.txt
        const topicsList = [
          "1. Basic linux Commands",
          "1. Greatest of Three Numbers",
          "2. Factorial of a Number",
          "3. Sum of N Numbers",
          "4. Odd or Even Number",
          "5. Fibonacci Series",
          "6. Multiplication Table",
          "7. Swapping Two Numbers",
          "8. File Manipulation (Creating a file and writing to it)",
          "9. Palindrome Check",
          "10. Positive or Negative Number",
          "11.bash",
          "12. Area of Different Shapes",
          "13. Armstrong Number",
          "14. Arithmetic Operations",
          "3. IMPLEMENTATION OF UNIX SYSTEM CALLS",
          "4.1 FCFS ALGORITHM",
          "4.2 SJF ALGORITHM",
          "4.3 SRTF ALGORITHM",
          "4.4 PRIORITY SCHEDULING ALGORITHM",
          "4.5 ROUND ROBIN ALGORITHM",
          "5.1-PRODUCER CONSUMER PROBLEM USING SEMAPHORES",
          "5.2 DINING PHILOSOPHER’S TO DEMONSTRATE PROCESS SYNCHRONIZATION",
          "6. IMPLEMENTATION OF BANKERS ALGORITHM",
          "7.1 FIRST FIT",
          "7.2 BEST FIT",
          "7.3-WORST FIT",
          "7.4-NEXT FIT",
          "8.1-FIFO PAGE REPLACEMENT",
          "8.2-LRU PAGE REPLACEMENT",
          "8.3-OPTIMAL PAGE REPLACEMENT",
          "9.1 FCFS SCHEDULING ALGORITHM",
          "9.2 SSTF (SHORTEST SEEK TIME FIRST) ALGORITHM",
          "9.3 SCAN SCHEDULING ALGORITHM",
          "9.4 C-SCAN SCHEDULING ALGORITHM",
          "9.5-LOOK DISK SCHEDULING ALGORITHM",
          "9.6 C-LOOK DISK SCHEDULING ALGORITHM",
          "10.1 CONTIGUOUS (SEQUENTIAL) FILE ALLOCATION ALGORITHM",
          "10.2 LINKED FILE ALLOCATION ALGORITHM",
          "10.3 INDEXED FILE ALLOCATION ALGORITHM"
        ];
  
        // Split the text by 'END' to divide sections
        const sections = text.split("END");
  
        // Clear existing options in dropdown
        select.innerHTML = "";
  
        // Add a default option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select a Topic";
        select.appendChild(defaultOption);
  
        // Add each topic as an option in the dropdown
        topicsList.forEach((topic, index) => {
          const option = document.createElement("option");
          option.value = index;
          option.textContent = topic;
          select.appendChild(option);
        });
  
        // Add event listener to handle topic selection
        select.addEventListener("change", function () {
          if (this.value === "") {
            contentDiv.innerHTML = `<pre><code class="language-txt">${escapeHtml(
              text
            )}</code></pre>`;
          } else {
            const selectedContent = sections[this.value].trim();
            contentDiv.innerHTML = `<pre><code class="language-txt">${escapeHtml(
              selectedContent
            )}</code></pre>`;
          }
          Prism.highlightAll();
        });
      })
      .catch((error) => {
        console.error("Error loading file:", error);
        contentDiv.innerHTML =
          '<p style="color: red;">Error loading content. Please refresh the page.</p>';
      });
  };
  
