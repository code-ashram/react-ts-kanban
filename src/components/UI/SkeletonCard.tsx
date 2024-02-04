import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Skeleton } from '@nextui-org/react'
import { FC } from 'react'
import cn from 'classnames'

import styles from '../../App.module.scss'

const SkeletonCard: FC = () => (
  <li className={cn(styles.listItem)}>
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Skeleton className={cn(styles.skeletonImg)}>
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
        </Skeleton>
        <div className="flex flex-col">
          <Skeleton className={cn(styles.skeletonTitle)}>
            <p className="text-md">NextUI</p>
          </Skeleton>
          <Skeleton className={cn(styles.skeletonSubtitle)}>
            <p className="text-small text-default-500">nextui.org</p>
          </Skeleton>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Skeleton className={cn(styles.skeletonText)}>
          <p>Make beautiful websites regardless of your design experience.</p>
        </Skeleton>
      </CardBody>
      <Divider />
      <CardFooter>
        <Skeleton className={cn(styles.skeletonFooter)}>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Skeleton>
      </CardFooter>
    </Card>
  </li>

)

export default SkeletonCard
