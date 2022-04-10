import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore' ;
const firebaseConfig = {
  }  
firebase.initializeApp(firebaseConfig);

// getting data from firestore
const ourbooks = firebase.firestore().collection("books");
// ourbooks.get().then((snapshot)=>{
//     const data = snapshot.docs.map((doc)=>({
//         id: doc.id,
//         ...doc.data(),
//     }))
//     console.log("our books => ",data)
// })



// adding data to firestore
// firebase.firestore().collection('books').add({
//     title: 'shenel awbi',
// }).then((ref)=>{
//     console.log('book id => ', ref.id)
// })




//updating
// firebase.firestore().collection('books').doc('0a3HTjgnWNXd86xwCF3N').update({
//     author: 'amirreza alasti'
// });




//deleting
// ourbooks.doc('0a3HTjgnWNXd86xwCF3N').delete()



//lets start querys
// 1 ->
// const query = await ourbooks.where('title', '==', 'test').get()
// console.log(query)



// 2 ->
// query.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });



// 3 -> 
// const query = await ourbooks.where('price', '>', 210).get();
// query.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });



// 4 ->
// const query = await ourbooks.where('price', '>=', 200).limit(3).get();
// query.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });



// 5 ->
// const query = await ourbooks.where('price', '>=', 200).orderBy('price', 'desc').get();
// query.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });


// 6 ->
// const query = await ourbooks.where('price', '>', 210).where ('price', '<', 230);
// const observe = query.onSnapshot(querySnapshot => {
//     querySnapshot.forEach(doc => {
//         console.log(doc.id, '=>', doc.data())
//     })
// });



// 7 -> 
// const query = await ourbooks.where('price', '>=', 200).orderBy('price', 'desc').endAt(210).get();
// query.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });



// 8 ->
// const query = await ourbooks.where('price', '>=', 200).orderBy('price', 'desc').startAt(210).get();
// query.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });
