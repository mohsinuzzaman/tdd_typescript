const fs = jest.genMockFromModule("fs");

// let mockFiles: object = {};

// function __setMockFiles(newMockFiles: object) {
//   mockFiles = newMockFiles;
// }

const mockDBData = [
  { eid: 1, name: "test1", age: 20 },
  { eid: 2, name: "test2", age: 21 },
  { eid: 3, name: "test3", age: 23 },
  { eid: 999999, name: "test999999", age: 999999 },
];

function readFileSync(filePath: string) {
  console.log("mock readFileSync invoked with " + filePath);
  return JSON.stringify(mockDBData);
}

function writeFile(filePath: string) {
  console.log("mock writeFile invoked with " + filePath);
  return JSON.stringify(mockDBData);
}

// If anyone knows how to avoid the type assertion feel free to edit this answer
// (fs as any).__setMockFiles = __setMockFiles;
(fs as any).readFileSync = readFileSync;
(fs as any).writeFile = writeFile;

module.exports = fs;
