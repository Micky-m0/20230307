import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // 枠生成
  const li = document.createElement("li");
  li.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 押された完了ボタンの親タグ（li）を完了リストに追加
    // 親要素を取得
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button(戻す)タグ生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 押された完了ボタンの親タグ（li）を未完了リストから削除
      const deleteTarget = returnButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);
      //テキスト取得
      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(returnButton);

    // 完了リストに追加
    document.getElementById("completed-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incompleted-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
