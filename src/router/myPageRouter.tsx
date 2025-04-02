import MyPage1 from "../MyPage1";
import MyPage2 from "../MyPage2";
import MyPage3 from "../MyPage3";
import RouterMyPage from "../RouterMyPage";

export const myPageRouter: any = {
    path: 'mypage',
    element: (
        <RouterMyPage />
    ),
    children: [
        { path: 'page1', element: <MyPage1 /> },
        { path: 'page2', element: <MyPage2 /> },
        { path: 'page3/:id', element: <MyPage3 /> },
    ],
};