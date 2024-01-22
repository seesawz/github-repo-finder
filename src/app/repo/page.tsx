'use client'
import { Octokit } from "@octokit/rest";
import { useState } from "react";
import { set } from "vue";
// 创建一个Octokit实例
const octokit = new Octokit({
    auth: "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", // 将这里替换为你的token
});


export default function Page() {
    //登录github账号
    const connect = () => {
        // 现在你可以使用octokit实例来访问GitHub的API
        octokit.rest.users.getAuthenticated().then(user => {
            console.log(user);
            getRepo(user.data.login);
        });
    }

    //获取仓库列表
    const getRepo = (user: string) => {
        octokit.rest.repos.listForUser({
            type: 'all',
            username: user
        }).then(res => {
            console.log('repolist', res);
        })
    }
    return (
        <div>
            <button className="" onClick={connect}>connect github</button>
        </div>
    )
}
