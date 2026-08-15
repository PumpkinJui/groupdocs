// src/components/CopyXboxIds.jsx
import React, { useState, useEffect } from "react";

export default function CopyXboxIds() {
    const [adminIds, setAdminIds] = useState([]);
    const [survivalIds, setSurvivalIds] = useState([]);
    const [normalIds, setNormalIds] = useState([]);
    const [isCopied, setIsCopied] = useState(false);
    const [lastCopiedLabel, setLastCopiedLabel] = useState("");

    useEffect(() => {
        const extractData = () => {
            const admins = [];
            const survival = [];
            const normal = [];

            // 提取单个表格中第二列的所有 XBoxID（按 <br> 或换行分割）
            const extractFromTable = (table, targetArray) => {
                const rows = table.querySelectorAll("tbody tr");
                rows.forEach(row => {
                    const cells = row.querySelectorAll("td");
                    if (cells.length >= 2) {
                        const html = cells[1]?.innerHTML || "";
                        const ids = extractIdsFromHtml(html);
                        targetArray.push(...ids);
                    }
                });
            };

            const extractIdsFromHtml = html => {
                const ids = [];
                const parts = html.split(/<br\s*\/?>|\n/);
                parts.forEach(part => {
                    const text = part.replace(/<[^>]+>/g, "").trim();
                    if (text && text !== "—") {
                        ids.push(text);
                    }
                });
                return ids;
            };

            // 获取所有表格
            const tables = document.querySelectorAll("table");

            // 表格 0：管理员
            if (tables.length > 0) extractFromTable(tables[0], admins);
            // 表格 1：有生存服白名单的普通成员
            if (tables.length > 1) extractFromTable(tables[1], survival);
            // 表格 2：无生存服白名单的普通成员
            if (tables.length > 2) extractFromTable(tables[2], normal);

            // 去重（保留首次出现顺序）
            const unique = arr => arr.filter((id, index) => arr.indexOf(id) === index);

            setAdminIds(unique(admins));
            setSurvivalIds(unique(survival));
            setNormalIds(unique(normal));
        };

        // 延迟执行确保表格已渲染
        const timer = setTimeout(extractData, 150);
        return () => clearTimeout(timer);
    }, []);

    // 将 ID 列表格式化为 allowlist.json 格式
    const formatAsJson = ids => {
        const json = ids.map(id => ({ ignoresPlayerLimit: false, name: id }));
        return JSON.stringify(json, null, 2);
    };

    const handleCopy = async (ids, label) => {
        if (ids.length === 0) return;
        try {
            const text = formatAsJson(ids);
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setLastCopiedLabel(label);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("复制失败:", err);
        }
    };

    // 如果没有数据，不渲染任何内容
    if (adminIds.length === 0 && survivalIds.length === 0 && normalIds.length === 0) {
        return null;
    }

    const allSurvivalIds = [...adminIds, ...survivalIds];
    const allMemberIds = [...adminIds, ...survivalIds, ...normalIds];

    return (
        <div style={{ marginBottom: "16px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {/* 按钮 1：仅管理员 */}
            <button
                className="btn white_btn middle_btn btn_height_small font_size_middle"
                onClick={() => handleCopy(adminIds, "管理员")}
            >
                {isCopied && lastCopiedLabel === "管理员" ? "✅ 已复制！" : `📋 管理员 (${adminIds.length})`}
            </button>

            {/* 按钮 2：管理员 + 有生存服白名单的普通成员 */}
            <button
                className="btn white_btn large_btn btn_height_small font_size_middle"
                onClick={() => handleCopy(allSurvivalIds, "管理员+生存白名单")}
            >
                {isCopied && lastCopiedLabel === "管理员+生存白名单"
                    ? "✅ 已复制！"
                    : `📋 管理员+生存白名单 (${allSurvivalIds.length})`}
            </button>

            {/* 按钮 3：管理员 + 所有普通成员 */}
            <button
                className="btn white_btn middle_btn btn_height_small font_size_middle"
                onClick={() => handleCopy(allMemberIds, "全部成员")}
            >
                {isCopied && lastCopiedLabel === "全部成员" ? "✅ 已复制！" : `📋 全部成员 (${allMemberIds.length})`}
            </button>
        </div>
    );
}
