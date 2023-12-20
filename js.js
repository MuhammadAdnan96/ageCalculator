nums1 = [3, 5, 1, 8];
nums2 = [0, 2, 4, 2];

function merge(nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let mergeIndex = m + n - 1;

  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[mergeIndex] = nums1[index1];
      index1--;
    } else {
      nums1[mergeIndex] = nums2[index2];
      index2--;
    }
    mergeIndex--;
  }

  while (index2 >= 0) {
    nums1[mergeIndex] = nums2[index2];
    index2--;
    mergeIndex--;
  }

  return nums1.slice(); // Return a copy of the merged array
}

// Call the merge function
const mergedArray = merge(nums1, nums1.length, nums2, nums2.length);

// Display the merged array in the browser
document.addEventListener("DOMContentLoaded", function () {
  const mergedArrayElement = document.createElement("div");
  mergedArrayElement.textContent =
    "Merged Array: " + mergedArray.sort().join(", ");
  document.body.appendChild(mergedArrayElement);
});

// star type numbering
for (var a = 1; a <= 5; a++) {
  for (let str = 4; str >= a; str--) {
    document.write("&nbsp;&nbsp;");
  }
  for (var s = 1; s <= a; s++) {
    document.write(s);
  }
  document.write("<br>");
}

for (var q = 4; q >= 1; q--) {
  for (let str = 4; str >= q; str--) {
    document.write("&nbsp;&nbsp;");
  }
  for (let z = 1; z <= q; z++) {
    document.write(z);
  }
  document.write("<br>");
}
/////

//  <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <script>
//       nums1 = [3, 5, 1, 8];
//       nums2 = [0, 2, 4, 2];

//       function merge(nums1, m, nums2, n) {
//         let index1 = m - 1;
//         let index2 = n - 1;
//         let mergeIndex = m + n - 1;

//         while (index1 >= 0 && index2 >= 0) {
//           if (nums1[index1] > nums2[index2]) {
//             nums1[mergeIndex] = nums1[index1];
//             index1--;
//           } else {
//             nums1[mergeIndex] = nums2[index2];
//             index2--;
//           }
//           mergeIndex--;
//         }

//         while (index2 >= 0) {
//           nums1[mergeIndex] = nums2[index2];
//           index2--;
//           mergeIndex--;
//         }
//         // document.write(nums1);
//         console.log(nums1);
//       }
//     </script>
//   </head>
//   <body></body>
// </html>
