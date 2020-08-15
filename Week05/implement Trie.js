/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let c of word) {
    if (node[c] == null) node[c] = {};
    node = node[c];
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.traverse(word);
  return node != null && node.isWord === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.traverse(prefix) != null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
Trie.prototype.traverse = function (word) {
  let node = this.root;
  for (let c of word) {
    node = node[c];
    if (node == null) return null;
  }
  console.log("node is");
  console.log(node);
  return node;
};

var trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // returns true
console.log(trie.search("app")); // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");
console.log(trie.search("app")); // returns true
