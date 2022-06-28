# n * m 직사각형 미로 속에 갇혔습니다. 현재 위치는 (1,1)이며 미로의 출구는 (n,m)에 위치해있습니다. 
# 1인 곳으로만 이동할 수 있습니다.
# 이동해야하는 최소 칸수를 구하세요. 칸을 셀 때 시작칸과 마지막칸을 모두 포함해서 계산합니다.


from collections import dequeue

n, m = map(int, input().split())

graph = []

for i in range(n):
    graph.append(list(map(int,input())))

dx = [-1. 1, 0, 0]
dy = [0, 0, -1, 1]

print(bfs(0,0))

def bfs(x, y):
    queue = dequeue()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]        

            if nx < 0 or nx >= n or ny < 0 or ny >= m
                continue
            if graphe[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
        return graph[n-1][m-1]
