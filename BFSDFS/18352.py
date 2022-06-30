# 특정 도시의 거리 찾기

# 어떤 나라에는 1번부터 N번까지의 도시와 M개의 단방향 도로가 존재한다. 모든 도로의 거리는 1이다.

# 이 때 특정한 도시 X로부터 출발하여 도달할 수 있는 모든 도시 중에서, 최단 거리가 정확히 K인 모든 도시들의 번호를 출력하는 프로그램을 작성하시오. 또한 출발 도시 X에서 출발 도시 X로 가는 최단 거리는 항상 0이라고 가정한다.
from collections import deque

def bfs(graph, start):
    queue = deque()
    queue.append(start-1)
    visited[start-1] = 1
    distance[start-1] = 0

    while queue:
        vertex = queue.popleft()
        for nv in graph[vertex]:
            if visited[nv-1] == 0:
                queue.append(nv-1)
                visited[nv-1] = 1
                distance[nv-1] = distance[vertex] + 1

n, m, k, x = map(int, input().split())

graph = [[] for _ in range(n)]
visited = [0] * n
distance = [0] * n

for _ in range(m):
    start, end = map(int, input().split())
    graph[start-1].append(end)
    print(graph)

bfs(graph, x)

for i in range(n):
    if(distance[i] == k):
        print(i+1)
    if k not in distance:
        print(-1)